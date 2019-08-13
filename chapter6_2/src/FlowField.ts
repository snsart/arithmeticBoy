class FlowField extends egret.Sprite {

	private field:Array<Array<any>>;
	private cols:number;
	private rows:number;
	private resolution;
	private noise:Noise;

	public constructor(width:number,height:number) {
		super();
		this.resolution=20;
		this.cols=Math.floor(width/this.resolution);
		this.rows=Math.floor(height/this.resolution);
		this.field=[];
		this.noise=new Noise();
		this.fillField();
		this.display();
	}

	public fillField(){
		let xoff=0;
		for(let i=0;i<this.rows;i++){
			let arr=[];
			let yoff=0;
			for(let j=0;j<this.cols;j++){
				let num=this.noise.perlinNoise_2D(xoff,yoff);
				num=2*(num+0.3)*Math.PI/0.7;
				let v=new Vector2D(Math.cos(num),Math.sin(num));
				arr.push(v);
				yoff+=0.2;
			}
			xoff+=0.2;
			this.field.push(arr);
		}
	}

	public lookup(lookup:Vector2D):Vector2D{
		let column=Math.floor(lookup.x/this.resolution);
		column=column>0?(column>=this.cols?(this.cols-1):column):0;

		let row=Math.floor(lookup.y/this.resolution);
		row=row>0?(row>=this.rows?(this.rows-1):row):0;
		return this.field[row][column].copy();
	}

	public display(){
		for(let i=0;i<this.field.length;i++){
			for(let j=0;j<this.field[i].length;j++){
				let v:Vector2D=this.field[i][j];
				let angle=v.heading2D();
				this.drawShape(i,j,angle);
			}
		}
	}

	private drawShape(i,j,angle){
		let shape=new egret.Shape();
		let g=shape.graphics;
		g.beginFill(0x5abcf4);
		g.moveTo(8,0);
		g.lineTo(-8,-4);
		g.lineTo(-8,4);
		g.lineTo(8,0);
		shape.x=j*this.resolution;
		shape.y=i*this.resolution;
		shape.rotation=angle*180/Math.PI;
		this.addChild(shape);
	}
}