const randomMath = () => {
    const arr = ['*', '-', '+'];
    return arr[Math.floor(Math.random() * arr.length)];
};

export default randomMath;