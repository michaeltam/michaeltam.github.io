myApp.factory('stringService',function(){
	return {
		spaceoutCapitalizedString : function(input){
			
			if(!input){ return input; }

			var output = '';
			for(var i =0;i<input.length;i++){
				if ( i > 0 && input[i] == input[i].toUpperCase() && input[i] != ' '){
					output += " ";
				}

				output += input[i];
			}

			return output;
		}
	}
});