/*:
	@include:
		{
			"looop": "looop"
		}
	@end-include
*/

Moment = function Moment( name ){
	if( this instanceof Moment ){
		this.name = name;
		this.eventList = { };
	}else{
		return new Moment( name );
	}
};

Moment.prototype.on = function on( eventName, eventHandler ){
	/*:
		@meta-configuration:
			{
				"eventName:required": "string",
				"eventHandler:required": "function"
			}
		@end-meta-configuration

		@method-documentation:

		@end-method-documentation
	*/
	if( eventName in this.eventList ){
		
	}
};

Moment.prototype.when = function when( eventName, eventCondition, eventListener ){
	/*:
		@meta-configuration:
			{
				"eventName:required": "string",
				"eventCondition:required": "string" 
				"eventHandler:required": "function"
			}
		@end-meta-configuration

		@method-documentation:

		@end-method-documentation
	*/
};

Moment.prototype.forget = function forget( eventName, handlerID ){

};