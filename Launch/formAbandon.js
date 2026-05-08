const form = document.getElementById('quoteForm');

adobeDataLayer.push({
    event: 'quoteFormAbandon',
    quoteType: form.quoteType.value,
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    street: form.street.value,
    city: form.city.value,
    state: form.state.value,
    zip: form.zip.value
});
