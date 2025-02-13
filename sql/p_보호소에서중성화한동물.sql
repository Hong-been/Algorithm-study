-- https://school.programmers.co.kr/learn/courses/30/lessons/59045
SELECT 
    i.ANIMAL_ID,
    i.ANIMAL_TYPE,
    i.NAME
FROM 
    ANIMAL_INS AS i
LEFT JOIN
    ANIMAL_OUTS AS o 
    ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE 
    i.SEX_UPON_INTAKE LIKE '%Intact%'
    AND (o.SEX_UPON_OUTCOME LIKE '%Spayed%' OR o.SEX_UPON_OUTCOME LIKE '%Neutered%')
ORDER BY 
    i.ANIMAL_ID ASC;