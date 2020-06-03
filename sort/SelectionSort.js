	function SelectionSort(arr) {
	for (var i = 0; i < arr.length-1; i++){
	var min = i;
	for(var j = i + 1; j < arr.length; j++){
	if (arr[j] < arr[min]){
	min = j;
	}
	}
	temp = arr[i];
	arr[i] = arr[min];
	arr[min] = temp; 
	}
	return arr;
	}
	SelectionSort([3,2,8,2,1,4]);
