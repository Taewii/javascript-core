function investigation([companyData, delimiter, ...sentences]) {
  const companies = companyData.split(delimiter).map(x => x.toLowerCase().trim());
  let valid = [];
  let invalid = [];

  const isValid = (sentence) => {
    for (const company of companies) {
      if (sentence.indexOf(company) === -1) {
        return false;
      }
    }

    return true;
  };

  sentences.map(s => s.toLowerCase()).forEach(sentence => {
    if (isValid(sentence)) {
      valid.push(sentence);
    } else {
      invalid.push(sentence);
    }
  });

  if (valid.length) {
    console.log('ValidSentences');

    for (let i = 0; i < valid.length; i++) {
      console.log(`${i + 1}. ${valid[i]}`);
    }
  }

  if (valid.length && invalid.length) {
    console.log('='.repeat(30));
  }

  if (invalid.length) {
    console.log('InvalidSentences');

    for (let i = 0; i < invalid.length; i++) {
      console.log(`${i + 1}. ${invalid[i]}`);
    }
  }
}

investigation([
  "bulgariatour@, minkatrans@, koftipochivkaltd",
  "@,",
  "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
  "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
  "someone continues as no "
]);

investigation([
  "bulgariatour@, minkatrans@, koftipochivkaltd",
  "@,",
  "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
  "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
  "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"
]);