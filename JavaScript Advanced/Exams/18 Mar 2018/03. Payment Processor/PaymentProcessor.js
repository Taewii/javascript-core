class PaymentProcessor {
  constructor(obj) {
    this.obj = obj;
    this.payments = {};
  }
  
  get obj() {
    return this._obj;
  }
  
  set obj(options) {
    this._obj = {
      types: ["service", "product", "other"],
      precision: 2
    };
    
    if (options) {
      if (options.types) {
        this._obj.types = options.types;
      }
      
      if (options.precision) {
        this._obj.precision = options.precision;
      }
    }
  }
  
  get(id) {
    if (this.payments[id]) {
      const payment = this.payments[id];
      const output = [
        `Details about payment ID: ${id}`,
        `- Name: ${payment.name}`,
        `- Type: ${payment.type}`,
        `- Value: ${payment.value}`
      ];
      return output.join('\n');
    } else {
      throw new Error('ID not found.');
    }
  }
  
  setOptions(options) {
    this.obj = options;
  }
  
  registerPayment(id, name, type, value) {
    if (id && name && typeof value === 'number' && this.obj.types.includes(type) && !this.payments[id]) {
      this.payments[id] = {
        id,
        name,
        type,
        value: value.toFixed(this.obj.precision)
      };
    } else {
      throw new Error('Parameters are not valid.');
    }
  }
  
  deletePayment(id) {
    if (this.payments[id]) {
      delete this.payments[id]; // I know this is really slow
    } else {
      throw new Error('ID not found.');
    }
  }
  
  toString() {
    const balance = Object.keys(this.payments).reduce((acc, key) => {
      return acc += +this.payments[key].value;
    }, 0);
    
    const output = [
      'Summary',
      `- Payments: ${Object.keys(this.payments).length}`,
      `- Balance: ${balance.toFixed(this.obj.precision)}`,
    ];
    return output.join('\n');
  }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({
  types: ['product', 'material']
});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
// generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({
  types: ['service']
});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({
  precision: 5
});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());