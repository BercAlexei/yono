const getResource = async (url) => {
    let res = await fetch(url);
    return await res.json(res =>res);
};

export { getResource };