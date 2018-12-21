function acceptance() {
	const $company = $('[name="shippingCompany"]');
	const $productName = $('[name="productName"]');
	const $quantity = $('[name="productQuantity"]');
	const $scrape = $('[name="productScrape"]');
	const $warehouse = $('#warehouse');

	const companyName = $company.val().trim();
	const productName = $productName.val().trim();
	const quantity = +$quantity.val() - +$scrape.val();

	if (companyName && productName && quantity > 0) {
		$warehouse
			.append($('<div>')
				.append($('<p>')
					.text(`[${companyName}] ${productName} - ${quantity} pieces`))
				.append($('<button>')
					.attr('type', 'button')
					.text('Out of Stock')
					.on('click', removeItem)));

		$company.val('');
		$productName.val('');
		$quantity.val('');
		$scrape.val('');
	}

	function removeItem() {
		$(this).parent().remove();
	}
}