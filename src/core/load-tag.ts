import _IDOM = require("incremental-dom");
import registerTag from "./register-tag";

declare var System:any;

interface IAfterProps{
	content:(cb:Function)=>void;
}

interface IAfterLoad{
	props:(props:{})=>IAfterProps;
}

class LoadTag{
	public load(target:string,tag:string):string{
		let tmpTagReg = registerTag.getRegistred(tag);
		let tmpIdElement = target;
		//let tmpIdElement:string = "custom_element_id_"+new Date().getTime();
		//_IDOM.elementVoid("div",null,['id',tmpIdElement]);
		if(!tmpTagReg._$controller){
			
			//console.log(registerTag.getRegistred(tag));
			

			//_IDOM.elementVoid("div",null,['id',tmpIdElement]);	
				//_IDOM.text("PRE LOAD SUB-COMP!"+tmpIdElement); 
			//_IDOM.elementClose("div");
			

			System.import(tmpTagReg.url).then((_controller:any)=>{
				let _controllerName:string = Object.keys(_controller)[0];
				//importing the render					
				System.import(tmpTagReg.url+".html").then((_sub_comp:any)=>{			
					let _modname:string = Object.keys(_sub_comp)[0];
					//console.log(_modname);
					//let _tag_alias:string = _modname.replace(/([A-Z])/g, function($1:string){return "-"+$1.toLowerCase();});
					/*
					defineTag({
			      		tag:_tagname
			      		,render:_sub_comp[_modname]
			      		,controller:_controller[_controllerName]
			    	});
			    	*/
			    	
			    	//console.log(_controller[_controllerName]);
			    	if(!_controller[_controllerName].prototype.refresh){
		                _controller[_controllerName].prototype._$render_from_powerup = _sub_comp[_modname];
		                _controller[_controllerName].prototype.refresh =function(){
		                    //IncrementalDOM.patch(this._$el$domref,this._$render_from_powerup, this);
			            	if(this._$el$domref){
			            		_IDOM.patch(document.getElementById(this._$el$domref),this._$render_from_powerup,this);
		                   	}			            
		                }
	              	}

	              	registerTag.config(tmpTagReg.tag,_controller[_controllerName]);
					
	              	let instController = new _controller[_controllerName]();
	              	instController._$el$domref = tmpIdElement;
	              	//_sub_comp[_modname]({texto:'meu amigo charles brow!'});  
	              	instController.refresh();
	              	if(instController.attached){
	              		instController.attached();
	              	}

	              	//_IDOM.patch(document.getElementById(tmpIdElement),_sub_comp[_modname], {texto:'meu amigo charles brow!'});
			                  			

				});
			});

			//adiciona metodo refresh ao prototype do controller
			//cria uma instancia do controller
		}else{
			
            let controlInt = new tmpTagReg._$controller();
            controlInt._$el$domref = tmpIdElement;
            //_IDOM.elementOpen("div",null,['id',tmpIdElement]);	
				//_IDOM.text("PRE LOAD SUB-COMP!"+tmpIdElement); 
				controlInt._$render_from_powerup(controlInt);
			//_IDOM.elementClose("div");
		  	//controlInt._$render_from_powerup(controlInt); 
		  	
		}
		return "";
	}
	public props(props:{}):IAfterProps{
		//adiciona props ao controller antes do start
		//set todas as props e invoca os metodos on+attr+changed
		console.log(props);
		return this;
	}
	public content(cb:Function):void{		
		//injeta content na bind do patch do incremental .bind({content:cb})
		//chama o metodo refresh da instancia
		//chama o metodo attached da instancia
		
		console.log('cb');
	}
}

export default new LoadTag();