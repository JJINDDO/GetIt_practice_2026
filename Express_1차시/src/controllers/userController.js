// 한 엔드포인트의 함수들 관리
export const getUsers = (req, res) => {
    // req.query : ex. URL의 "?active=true&page=2"라는 쿼리스트링을 URL에서 가져와서, 나누어서 전달
    const { active, page } = req.query;

    res.json({
        message: "User List",
        filters: { active, page }
    });
}

export const createUser = (req, res) => {
    // req.body : 좌변의 객체들이 body 파라미터를 읽음
    const { name, email } = req.body;

    res.status(201).json({
        message: "User Created",
        data: {
            name: name,
            email: email
        }
    });
}