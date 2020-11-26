function SelectionSort(arr) {
	for (var start = 0; start <= arr.length-1; start++){
		var min_index = start, min = arr[start];
		for(var i = start + 1; i <= arr.length - 1; i++){
			if (arr[i] < min) {
				min = arr[i];
				min_index = i;
			}
		}
		var temp = arr[start];
		arr[start] = arr[min_index];
		arr[min_index] = temp; 
	}
}


	
	
