let product_list = [];
let curId = 1;

export const getAllProducts = (req, res) => {
    res.status(201).json({ data: product_list });
}

export const getProductById = (req, res) => {
    const id = Number(req.params.id);
    const product = product_list.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ error: `Product(${id}) Not found` });
    }
    else res.status(200).json({ data: product });
}

export const createProduct = (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: 'Name and Price are required' });
    }

    const newProduct = { id: curId++, name, price };

    product_list.push(newProduct);
    res.status(201).json({ data: newProduct });
}

export const replaceProduct = (req, res) => {
    const id = Number(req.params.id);
    const index = product_list.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ error: `Product(${id}) Not found` });
    const { name, price } = req.body;

    if (!name || !price)
        return res.status(400).json({ error: 'Name and Price are required' });

    product_list[index] = { id, name, price };
    res.json({ data: product_list[index] });
}

export const updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const product = product_list.find(p => p.id === id); // product : 전달할 객체

    if (!product) return res.status(404).json({ error: `Product(${id}) Not found` });
    const { name, price } = req.body;

    // name, price 중 업데이트 된 것 있으면 
    if (name) product.name = name;
    if (price) product.price = price;

    res.json({ data: product });
}

export const deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    const product = product_list.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ error: `Product(${req.params.id}) Not found` });
    }
    else {
        product_list = product_list.filter(p => p.id !== id);
        res.status(204).send();
    }
}