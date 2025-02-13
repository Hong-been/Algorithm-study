-- https://school.programmers.co.kr/learn/courses/30/lessons/59044
SELECT 
    i.NAME,
    i.DATETIME
FROM 
    ANIMAL_INS AS i
LEFT JOIN 
    ANIMAL_OUTS AS o 
    ON i.ANIMAL_ID = o.ANIMAL_ID
WHERE 
    o.ANIMAL_ID IS NULL
ORDER BY 
    i.DATETIME ASC
LIMIT
    3;