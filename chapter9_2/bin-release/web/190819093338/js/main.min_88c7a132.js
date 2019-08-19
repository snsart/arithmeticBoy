var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function s(t){try{h(o.next(t))}catch(e){r(e)}}function a(t){try{h(o["throw"](t))}catch(e){r(e)}}function h(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}h((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(i)throw new TypeError("Generator is already executing.");for(;h;)try{if(i=1,r&&(s=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(r,n[1])).done)return s;switch(r=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return h.label++,{value:n[1],done:!1};case 5:h.label++,r=n[1],n=[0];continue;case 7:n=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){h=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){h.label=n[1];break}if(6===n[0]&&h.label<s[1]){h.label=s[1],s=n;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(n);break}s[2]&&h.ops.pop(),h.trys.pop();continue}n=e.call(t,h)}catch(o){n=[6,o],r=0}finally{i=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,r,s,a,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},DNA=function(){function t(){this._genes=[],this._maxforce=.5,this._lifetime=200;for(var t=0;t<this._lifetime;t++){var e=Vector2D.random2D();e.mult(Math.random()*this._maxforce),this._genes.push(e)}}return Object.defineProperty(t.prototype,"genes",{get:function(){return this._genes},enumerable:!0,configurable:!0}),t.prototype.crossover=function(e){for(var n=new t,o=0;o<this._genes.length;o++){var i=Math.random();i>.5?n._genes[o]=this._genes[o]:n._genes[o]=e._genes[o]}return n},t.prototype.mutate=function(t){for(var e=0;e<this._genes.length;e++)if(Math.random()<t){var n=Vector2D.random2D();n.mult(Math.random()*this._maxforce),this._genes[e]=n}},t}();__reflect(DNA.prototype,"DNA");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=n.sent(),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return e=n.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return n.sent(),this.stage.removeChild(t),[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=new egret.Shape;t.graphics.beginFill(16777215),t.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight),this.addChild(t),this.setup(),this.onEnterFrame()},e.prototype.setup=function(){this.lifetime=199,this.lifeCounter=0;var t=.01;this.target=new Vector2D(800,400),this.drawTarget(),this.obstacles=[];var e=new Obstacle(200,150,20,400);this.addChild(e),this.obstacles.push(e);var n=new Obstacle(600,0,20,300);this.addChild(n),this.obstacles.push(n);var o=new Obstacle(600,468,20,300);this.addChild(o),this.obstacles.push(o),this.population=new Population(t,300,this.obstacles,this.target),this.addChild(this.population)},e.prototype.drawTarget=function(){var t=new egret.Shape,e=t.graphics;e.beginFill(16711920),e.drawCircle(this.target.x,this.target.y,10),this.addChild(t)},e.prototype.draw=function(){this.lifeCounter<this.lifetime?(this.population.live(),this.lifeCounter++):(this.lifeCounter=0,this.population.fitness(),this.population.selection(),this.population.reproduction())},e.prototype.onEnterFrame=function(){this.draw(),requestAnimationFrame(this.onEnterFrame.bind(this))},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var Obstacle=function(t){function e(e,n,o,i){var r=t.call(this)||this;return r.location=new Vector2D(e,n),r.w=o,r.h=i,r.display(),r}return __extends(e,t),e.prototype.contains=function(t){return t.x>this.location.x&&t.x<this.location.x+this.w&&t.y>this.location.y&&t.y<this.location.y+this.h?!0:!1},e.prototype.display=function(){var t=this.graphics;t.beginFill(8947848),t.drawRect(this.location.x,this.location.y,this.w,this.h)},e}(egret.Shape);__reflect(Obstacle.prototype,"Obstacle");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Population=function(t){function e(e,n,o,i){void 0===i&&(i=new Vector2D(0,0));var r=t.call(this)||this;r.mutationRate=e,r.totalPopulation=n,r.population=[],r.matingPool=[],r.target=i,r.obstacles=o;for(var s=0;s<r.totalPopulation;s++){var a=new Vehicle(1,80,380,r.target);a.obstacles=r.obstacles,r.population.push(a),r.addChild(a)}return r}return __extends(e,t),e.prototype.live=function(){for(var t=0;t<this.population.length;t++)this.population[t].run()},e.prototype.fitness=function(){for(var t=0;t<this.totalPopulation;t++)this.population[t].fitness()},e.prototype.selection=function(){this.matingPool=[];for(var t=0,e=0;e<this.totalPopulation;e++)t+=this.population[e].getFitness();for(var e=0;e<this.totalPopulation;e++){var n=this.population[e].getFitness()/t*300;if(console.log(n),1>n)console.log("zero+++++");else for(var o=0;n>o;o++)console.log(n),this.matingPool.push(this.population[e])}},e.prototype.reproduction=function(){for(var t=0;t<this.population.length;t++){var e=Math.floor(Math.random()*this.matingPool.length),n=Math.floor(Math.random()*this.matingPool.length),o=this.matingPool[e],i=this.matingPool[n],r=o.crossover(i);r.target=this.target,r.obstacles=this.obstacles,r.mutate(this.mutationRate),this.removeChild(this.population[t]),this.population[t]=r,this.addChild(r)}},e}(egret.Sprite);__reflect(Population.prototype,"Population");var Vector2D=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this._x=t,this._y=e}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t},enumerable:!0,configurable:!0}),t.add=function(e,n){var o=e.x+n.x,i=e.y+n.y;return new t(o,i)},t.sub=function(e,n){var o=e.x-n.x,i=e.y-n.y;return new t(o,i)},t.mult=function(e,n){var o=e.x*n,i=e.y*n;return new t(o,i)},t.div=function(e,n){if(0==n)throw new Error("除0错误");var o=e.x/n,i=e.y/n;return new t(o,i)},t.mag=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},t.setMag=function(e,n){return e=t.normalize(e),t.mult(e,n)},t.normalize=function(e){var n=t.mag(e);return 0===n?new t(0,0):t.div(e,n)},t.limit=function(e,n){t.mag(e)>n&&(e=t.setMag(e,n))},t.heading2D=function(t){return Math.atan2(t.y,t.x)},t.rotate=function(e,n){var o=Math.cos(n),i=Math.sin(n),r=e.x*o+e.y*i,s=-e.x*i+e.y*o;return new t(r,s)},t.lerp=function(e,n,o){var i=e.x*(1-o)+n.x*o,r=e.y*(1-o)+n.y*o;return new t(i,r)},t.dist=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},t.angelBetween=function(e,n){return t.heading2D(n)-t.heading2D(e)},t.dot=function(t,e){return t.x*e.x+t.y*e.y},t.cross=function(t,e){return t.x*e.y-e.x*t.y},t.random2D=function(){var e=Math.random()-.5,n=Math.random()-.5,o=new t(e,n);return o.normalize(),o},t.prototype.add=function(t){this.x+=t.x,this.y+=t.y},t.prototype.sub=function(t){this.x-=t.x,this.y-=t.y},t.prototype.mult=function(t){this.x*=t,this.y*=t},t.prototype.div=function(t){if(0==t)throw new Error("除0错误");this.x/=t,this.y/=t},t.prototype.mag=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.setMag=function(t){this.normalize(),this.mult(t)},t.prototype.normalize=function(){var t=this.mag();0!==t&&this.div(t)},t.prototype.limit=function(t){this.mag()>t&&this.setMag(t)},t.prototype.heading2D=function(){return Math.atan2(this.y,this.x)},t.prototype.rotate=function(t){var e=Math.cos(t),n=Math.sin(t),o=this.x,i=this.y;this.x=o*e+i*n,this.y=-o*n+i*e},t.prototype.lerp=function(e,n){var o=this.x*(1-n)+e.x*n,i=this.y*(1-n)+e.y*n;return new t(o,i)},t.prototype.dist=function(t){return Math.sqrt((this.x-t.x)*(this.x-t.x)+(this.y-t.y)*(this.y-t.y))},t.prototype.angelBetween=function(e){return t.heading2D(this)-t.heading2D(e)},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.cross=function(t){return this.x*t.y-t.x*this.y},t.prototype.copy=function(){return new t(this.x,this.y)},t}();__reflect(Vector2D.prototype,"Vector2D");var Vehicle=function(t){function e(e,n,o,i){void 0===i&&(i=new Vector2D(0,0));var r=t.call(this)||this;r.geneCounter=0,r.stoped=!1,r.obstacles=[],r.dna=new DNA,r.mass=e,r.location=new Vector2D(n,o),r.velocity=new Vector2D(0,0),r.acceleration=new Vector2D(0,0),r.target=i,r.shape=new egret.Shape;var s=r.shape.graphics;return s.clear(),s.beginFill(16711680),s.moveTo(0,0),s.lineTo(-10,-5),s.lineTo(-10,5),s.lineTo(0,0),r.addChild(r.shape),r.shape.x=r.location.x,r.shape.y=r.location.y,r}return __extends(e,t),e.prototype.testObstacle=function(){for(var t=0,e=this.obstacles;t<e.length;t++){var n=e[t];n.contains(this.location)&&(this.stoped=!0)}},e.prototype.run=function(t){this.stoped||(this.geneCounter++,this.applyForce(this.dna.genes[this.geneCounter]),this.update(),this.testObstacle(),this.display())},e.prototype.fitness=function(){var t=Vector2D.dist(this.location,this.target);this._fitness=Math.pow(1/t,2),this.stoped&&(this._fitness=0)},e.prototype.getFitness=function(){return this._fitness},e.prototype.crossover=function(t){var n=new e(1,80,380),o=this.dna.crossover(t.dna);return n.dna=o,n},e.prototype.mutate=function(t){this.dna.mutate(t)},e.prototype.applyForce=function(t){var e=Vector2D.div(t,this.mass);this.acceleration.add(e)},e.prototype.update=function(){this.velocity.add(this.acceleration),this.location.add(this.velocity),this.acceleration.mult(0)},e.prototype.display=function(){this.shape.x=this.location.x,this.shape.y=this.location.y;var t=180*this.velocity.heading2D()/Math.PI;this.shape.rotation=t},e.prototype.checkEdge=function(t,e){this.location.x>t?this.location.x=0:this.location.x<0&&(this.location.x=t),this.location.y>e?this.location.y=0:this.location.y<0&&(this.location.y=e)},e}(egret.Sprite);__reflect(Vehicle.prototype,"Vehicle");