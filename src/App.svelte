<script>
  export let email;
</script>

<main>
  <div class="tow-logo">
    <img src="/24HourTowing-Logo.png" alt="24 Hour Towing Logo">
  </div>
  <h3>Serving the DFW Metroplex and surrounding areas.</h3>
  <h1><a href="tel:+1-469-669-3869">(469)<br/>NOW-3TOW</a></h1>
  <h2><a href="mailto:{email}">Send us an email!</a></h2>
  <p><a href="http://instagram.com/24hrtowing.llc"><i class="fab fa-instagram fa-3x"></i></a></p>
</main>

<footer>
  &copy; 2021 24 Hr Towing, LLC <br/> 
  Site Design & Hosting by <a href="https://www.ambitiousnerds.com" target="_blank">ambitiousNerds</a>
</footer>

<style>
	main {
    font-family: 'Lato', sans-serif;
    background-color: #282828;
		text-align: center;
    margin: 0 auto;
    max-width: 80%;
	}

  .tow-logo {
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 350px;
  }

	h1 {
    font-family: 'Lato', sans-serif;
    font-style: italic;
		color: #07FC07;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 400;
	}

  h2 {
    font-family: 'Lato', sans-serif;
		color: #07FC07;
		font-size: 2em;
    font-style: italic;
		font-weight: 200;
	}

  h3 {
    font-family: 'Lato', sans-serif;
		color: #07FC07;
		font-size: 1em;
		font-weight: 200;
	}

  a:active, a:link, a:visited {
    color: #07FC07;
  }

  @media (max-width: 800px) {
    a:active, a:link, a:visited {
    color: #07FC07;
    text-decoration: none;
  }
  }

  footer {
    background-color: #282828;
    text-align: center;
    color: #07FC07;
    font-size: .5em;
    font-weight: 100;
    margin-top: auto;
    width: 100%;
  }

	@media (max-width: 800px) {
		main {
			max-width: none;
		}

    h1 {
      font-size: 3em;
    }
	}
</style>