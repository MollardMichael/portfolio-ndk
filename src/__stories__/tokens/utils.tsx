import React from "react";
import type { ReactNode } from "react";

export type Token = {
	name: string;
	formattedValue: ReactNode;
	demo: ReactNode;
};

export function getTokenTable(globals: Token[]) {
	return (
		<table className="token-table">
			<thead>
				<tr>
					<th>Token</th>
					<th>Value</th>
					<th>Demo</th>
				</tr>
			</thead>
			<tbody>
				{globals.map((token) => {
					return (
						<tr key={token.name}>
							<td>
								<span>{token.name}</span>
							</td>
							<td>{token.formattedValue}</td>
							<td>{token.demo}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export function extractValue(variable: string): string {
	const el = document.createElement("div");
	document.body.appendChild(el);
	const value = getComputedStyle(el).getPropertyValue(variable);
	document.body.removeChild(el);
	return value;
}
