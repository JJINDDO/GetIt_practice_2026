// get
export const getProduct = (req, res) => {
    const { name, price } = req.query;

    res.json({
        message: "product info",
        filters: { name, price }
    });
};

// post
export const createProduct = (req, res) => {
    const {name, price} = req.body;

    // 정수 변환
    const numPrice = Number(price);

    res.status(201).json({
        message: "product create",
        data: {
            name: name,
            price: numPrice
        }
    });
};