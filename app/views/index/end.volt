{% if lastQuestion is defined %}
	{% if lastQuestion.Answers.id == lastAnswerId %}
		Correct
	{% else %}
		Wrong
	{% endif %}

	{% if not difficulty %}
		, that was {{ lastQuestion.Answers.text }}
	{% endif %}
{% endif %}

No more questions.

<p>Score: {{ score }} out of {{ total }}, {{ score/total*100 }}%</p>

{{ form("reset", "method": "post") }}
	{{ submit_button("Reset") }}
{{ end_form() }}
