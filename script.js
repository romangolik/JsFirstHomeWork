var array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];

function arrayMax(array){
	var max = -1/0;
	for(var i = 0; i < array.length; i++){
		if(+array[i] > max){
			max = +array[i];
		}
	}
	console.log("Максимальный элемент массива: " + max);
}

function arrayMin(array){
	var min = 1/0;
	for(var i = 0; i < array.length; i++){
		if(+array[i] < min){
			min = +array[i];
		}
	}
	console.log("Минимальный элемент массива: " + min);
}

function arraySum(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		if(isNaN(+array[i]) || +array[i] === undefined){
			sum += 0;
		} else {
			sum += +array[i];
		}
	}
	console.log("Сума элементов массива: " + sum);
}

arrayMax(array);
arrayMin(array);
arraySum(array);