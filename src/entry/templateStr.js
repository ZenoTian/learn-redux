/*
<% %>为js代码
<%= %>输出js表达式
*/
let template = `
<ul>
	<% for(var i=0; i < data.supplies.length; i++) { %>
		<li><%= data.supplies[i]%></li>
	<% } %>
</ul>
`

function compile(template){
	let evalExpr = /<%=(.+?)%>/g
	let expr = /<%=([\s\S]+?)%>/g

	template = template
		.replace(evalExpr, '`); \n echo( $1 ); \n echo(`')
		.replace(expr, '`); \n $1 \n echo(`')

	template = 'echo(`' + template + '`);';

	var script = 
	`(function parse(data){
		var output = "";

		function echo(html){
			output += html;
		}

		${ template }
		return output
	})`
	return script
}

