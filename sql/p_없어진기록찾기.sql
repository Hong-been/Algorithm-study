-- https://school.programmers.co.kr/learn/courses/30/lessons/59042
-- ANIMAL_INS
-- 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부
-- ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE
SELECT o.ANIMAL_ID, o.NAME FROM ANIMAL_OUTS AS o
LEFT JOIN ANIMAL_INS AS i ON o.ANIMAL_ID = i.ANIMAL_ID
WHERE i.ANIMAL_ID IS NULL