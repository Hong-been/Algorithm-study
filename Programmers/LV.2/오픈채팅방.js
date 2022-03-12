/*
"Enter uid1234 Muzi", 
"Enter uid4567 Prodo",
"Leave uid1234",
"Enter uid1234 Prodo",
"Change uid4567 Ryan"

디피?
프로도+"님이 들어왔습니다."-1234
라이언+"님이 들어왔습니다."-4567
프로도+"님이 나갔습니다."-1234
프로도+"님이 들어왔습니다."-1234

{
    1234: {nick: Prodo, ref: [0,2]}
    4567: {nick: Ryan, red: [1]}
}

Enter : 배열에 아이디-닉넴 업데이트, 현재배열 돌면서 이름바꿈, 마지막에 들어왔다고 추가
Leave : 배열에 아이디 조회해서, 마지막에 떠났다고 추가
Change: 현재배열에 추가안하고 닉넴바꾸고 업데이트

[[Prodo,님이 들어옴],[Ryan,님이 들어옴],[Prodo,님이 나감]]

*/
function solution(record) {
	//edge
	if (record.length === 0) return [];

	const user = {};
	const ans = [];
	const ment = { Enter: "님이 들어왔습니다.", Leave: "님이 나갔습니다." };

	for (let i = 0; i < record.length; i++) {
		const s = record[i].split(" ");

		if (s[0] === "Enter") {
			const curID = s[1];
			const curNick = s[2];

			ans.push([curID, ment[s[0]]]);

			user[curID] = curNick;

			continue;
		}
		if (s[0] === "Change") {
			const curID = s[1];
			const curNick = s[2];

			user[curID] = curNick;

			continue;
		}
		if (s[0] === "Leave") {
			const curID = s[1];
			ans.push([curID, ment[s[0]]]);
		}
	}

	return ans.map(([id, ment]) => user[id] + ment);
}
