const randomNum = () => {
	const min = 1;
	const max = 30;
	
	return Math.floor(Math.random() * (max - min)) + min;
};

export default randomNum;