

const ContactButton = () => {
  return (
    <div>
      <section className="contactContainer">  
            <li>
                <a href="mailto:edgardo.gonzalez.23@hotmail.com" target="_blank" rel="noreferrer" className="contact-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                    <span className="contact-button-text">Contact</span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/eddy-gg/" target="_blank" rel="noreferrer" className="likedin-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                    <span className="likedin-button-text">LinkedIn</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/eddy3o" target="_blank" rel="noreferrer" className="github-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="github-button-text">GitHub</span>
                </a>
            </li>
            <li>
                <a href="https://www.paypal.com/donate/?hosted_button_id=B8VQE5PPJRCNE" target="_blank" rel="noreferrer" className="paypal-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.635 17.443h-2.327c-.214 0-.383-.18-.37-.392.039-.671.427-2.871 1.772-11.525.046-.303.303-.526.605-.526h4.284c2.292 0 3.985 1.347 3.518 3.757-.481 2.508-2.012 3.728-4.68 3.728l-1.318.001c-.54.001-.74.206-.808.688l-.676 4.269zm8.87-5.8c-.494 2.578-2.185 3.468-4.345 3.468h-.333c-.264 0-.489.195-.53.46l-.469 2.969c-.042.265-.266.46-.53.46h-1.596c-.227 0-.401-.203-.366-.427l.808-5.18.036-.033h1.257c3.054 0 4.964-1.527 5.526-4.415.474.476.64 1.095.64 1.749 0 .313-.038.633-.098.949z"/></svg>
                    <span className="paypal-button-text">PayPal</span>
                </a>
            </li>
        </section>
    </div>
  )
}

export default ContactButton
