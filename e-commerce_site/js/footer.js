const footer = () => {
    let nav = document.querySelector('.footer');

    nav.innerHTML = `
         <div class="footer-content">
            <div class="footer-content-left">
                <img src="./img/logo.png" alt="" />
                <p>
                    the types of information that Zomato may collect from you when you access or use its websites,
                    applications and other online services (collectively, referred as "Services"); and
                    its practices for collecting, using, maintaining, protecting and disclosing that information.
                </p>
                <div class="footer-social-icon">
                    <img src="./img/facebook_icon.png" alt="" /></img>
                    <img src="./img/twitter_icon.png" alt="" /></img>
                    <img src="./img/linkedin_icon.png" alt="" /></img>
                </div>
            </div>
            <div class="footer-content-center">
                <h2>company</h2>
                <ul>
                    <li>home</li>
                    <li>About us</li>
                    <li>delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div class="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 77788 76388</li>
                    <li>sanketchitaliya@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p class="footer-copyright">
            Copyright 2024 @ Tomato.com -All right Reserved.
        </p>
    `;
}

footer();