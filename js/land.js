window.addEventListener('load',logeado("hector"),false);

	function logeado(nombre){
		const contMen = [['Mi Perfil','miPer'],['Cerrar Sesión','loOt']];
		const contOpt = [['Mis Cuentas','princ']];
		logHeaderOne(nombre,contMen,contOpt);
	}
	
	function logHeaderOne(nombre,contMen,contOpt){
		let hijo,hiHi,txt,txtOpt;
		let menu = document.getElementsByClassName('menu')[0];
		let menuItems = document.createDocumentFragment();
		let textos = new Array();
		contMen.forEach((item,index,array)=>{
			textos.push([item[0],[['class',item[1]],['href','javascript:void(0)']]]);
		});
		textos.forEach((item,index,array)=>{
			hijo = document.createElement('a');
			item[1].forEach((it,ind,arr)=>{hijo.setAttribute(it[0],it[1]);});
			txt = document.createTextNode(item[0]);
			hijo.appendChild(txt);
			hiHi = document.createElement('li');
			hiHi.appendChild(hijo);
			menuItems.appendChild(hiHi);
		});
		const liNod = document.createElement('li');
		liNod.setAttribute('id','imagen');
		menuItems.appendChild(liNod);
		menu.appendChild(menuItems);
		//opciones
		let opciones = document.getElementsByClassName('opciones')[0];
		let opcionesItems = document.createDocumentFragment();
		txtOpt = new Array();
		contOpt.forEach((item,index,array)=>{
			txtOpt.push([item[0],[['id','imagen'],['class',item[1]]]]);
		});
		txtOpt.forEach((item,index,array)=>{
			hijo = document.createElement('a');
			item[1].forEach((it,ind,arr)=>{hijo.setAttribute(it[0],it[1]);});
			txt = document.createTextNode(item[0]);
			hijo.appendChild(txt);
			opcionesItems.appendChild(hijo);
		});
		let cont = document.createElement('div');
		cont.setAttribute('class','opciones-content');
		cont.appendChild(opcionesItems);
		opciones.appendChild(cont);
		// dropdown
		let dropdown = document.getElementsByClassName('dropdown')[0];
		let dropdownItems = document.createDocumentFragment();
		let padre = document.createElement('button');
		padre.setAttribute('class','dropbtn');
		txt = document.createTextNode(nombre);
		padre.appendChild(txt);
		dropdownItems.appendChild(padre);
		let hijos = document.createDocumentFragment();
		textos.forEach((item,index,array)=>{
			hijo = document.createElement('a');
			item[1].forEach((it,ind,arr)=>{hijo.setAttribute(it[0],it[1]);});
			txt = document.createTextNode(item[0]);
			hijo.appendChild(txt);
			hijos.append(hijo);
		});
		// contenedor 
		cont = document.createElement('div');
		cont.setAttribute('class','dropdown-content');
		cont.appendChild(hijos);
		dropdownItems.appendChild(cont);
		dropdown.appendChild(dropdownItems);
	}