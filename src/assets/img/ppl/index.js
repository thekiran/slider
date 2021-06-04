const getImages = () => {
    let arr = [];

    for (let i = 36; i >= 0; i--) {
        arr.push(require(`./${i}.jpg`).default);
    }

    return arr;
};

export default getImages();
