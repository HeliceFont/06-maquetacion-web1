document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout( () => {
        document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.2302903688956!2d-6.9304900249133405!3d37.265965841307676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11cffd8c068ec9%3A0xf99a90bed94664a5!2sCalle%20Sanl%C3%BAcar%20de%20Guadiana%2C%2038%2C%2021007%20Huelva!5e0!3m2!1ses!2ses!4v1690391443445!5m2!1ses!2ses" ></iframe>
    `;
    }, 500);

});