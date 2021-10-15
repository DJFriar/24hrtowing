<script>
	export let phoneNum;
  export let email;
</script>

<main>
  <img src="/24HourTowing-Logo.png" alt="24 Hour Towing Logo">
  <h3>Serving the DFW Metroplex and surrounding areas.</h3>
	<h1>{phoneNum}</h1>
  <h2><a href="mailto:{email}">Send us an email!</a></h2>
</main>

<footer>
  Site created & hosted by <a href="https://www.ambitiousnerds.com" target="_blank">ambitiousNerds</a>
</footer>

<style>
	main {
    background-color: #282828;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

  img {
    max-width: 400px;
  }

	h1 {
		color: #07FC07;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 200;
	}

  h2 {
		color: #07FC07;
		font-size: 2em;
		font-weight: 200;
	}

  h3 {
		color: #07FC07;
		font-size: 1em;
		font-weight: 200;
	}

  a:active, a:link, a:visited {
    color: #07FC07;
  }

  footer {
    background-color: #282828;
    text-align: center;
    color: #07FC07;
    font-size: .4em;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>