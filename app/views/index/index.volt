<nav>
	{{ linkTo(["", "All"]) }}
	{{ linkTo(["?m=1&c=4", "Africa"]) }}
	{{ linkTo(["?m=1&c=7", "Antarctica"]) }}
	{{ linkTo(["?m=1&c=2", "Asia"]) }}
	{{ linkTo(["?m=1&c=3", "Australia"]) }}
	{{ linkTo(["?m=1&c=1", "Europe"]) }}
	{{ linkTo(["?m=1&c=5", "North America"]) }}
	{{ linkTo(["?m=1&c=6", "South America"]) }}
</nav>

{{ image("img/flags/" ~ question.image) }}

{{ form("", "method": "post", "id": "answers") }}
	{{ hidden_field("q", "value": question.id) }}
	{% for index, answer in answers %}
		<div class="padding">
			<button type="submit" name="a" value="{{ answer.id }}" class="btn-link">{{ answer.text }}</button>
		</div>
	{% endfor %}
{{ end_form() }}

{% if lastQuestion is defined %}
	{{ lastResult }}, that was {{ lastQuestion.Answers.text }}
	<p>Score: {{ score }} out of {{ total }}, {{ score/total*100 }}%</p>
{% endif %}

{{ form("reset", "method": "post") }}
	{{ submit_button("Reset") }}
{{ end_form() }}
