function getArrOfOur(val, arr){
	var val = val,
	    pos = 0,
	    len = arr.length,
	    i = 0,
	    start = 0,
	    end = 0,
	    newarr = [];
	//�ҳ�val �� arr�е�λ�� pos
	for(i = 0; i < len; i++){
		if(val == arr[i]){
			pos = i;
			break;
		}
	}
	//�ҳ�ǰ10�� ��10 
	if(pos > 10){
		start = pos - 10;
	}else{
		start = 0;
	}
	if(len - pos < 10){
		end = len;
	}else {
		end = pos +10;
	}
	//�ҳ�Ŀ������ 
	for(; start < end + 1; start++){
		start != pos && newarr.push(arr[start]);
	}
	//����
	newarr.sort(function(a, b){
		if(a > b){
			return 1;
		}else if(a == b){
			return 0;
		}else {
			return -1;
		}
	});

	console.log(newarr);

	return newarr;
}
