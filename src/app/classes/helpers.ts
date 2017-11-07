declare var _:any;


const random_string = (str_length = 20)=>{
	return _.times(str_length, () => _.random(35).toString(36)).join('');
}


export class Helpers{
	random_string = random_string;
};