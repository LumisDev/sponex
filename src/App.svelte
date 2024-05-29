<script>
	export let name
	export let elements
	function show(name, avoid) {
		if (avoid === '') {
			document.querySelector('.app>#elm-choice').innerHTML +=
				`<h1>You choosed: ${name}</h1>`
		} else {
			name !== avoid
				? (document.querySelector('.app>#elm-choice').innerHTML =
						`<h3>You choosed: ${name}</h3>`)
				: (document.querySelector('.app>#elm-choice').innerHTML =
						'<h3>Sorry, nothing here!</h3>')
		}
	}
</script>

<div class="app">
	<h1>Hello {name}</h1>
	<label for="elm-selector">Choose one element from the dropdown:</label>
	<select name="elms" id="elm-selector">
		{#each elements as elm}
			<option value={elm.val}>{elm.name}</option>
		{/each}
	</select>
	<button
		type="button"
		class="show-button"
		on:click={show(
			elements.find(
				(elm) =>
					elm.val ===
					document.querySelector('.app>#elm-selector').value
			).name,
			'--Choose one object--'
		)}>Show selected element on page</button
	>
	<div id="elm-choice">
		Choose one object then click the 'Show selected element on page' button
		to see the value here
	</div>
</div>
