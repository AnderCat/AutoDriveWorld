class Graph{
	constructor(points = [], segments = []){
		this.points = points;
		this.segments = segments;
	}

	addPoint(point){
		this.points.push(point);
	}

	containsPoint(point){
		return this.points.find((p) => p.equals(point));
	}

	containsSegment(segment){
		return this.segments.find((s) => s.equals(segment));
	}

	removeSegment(segment){
		this.segments.splice(this.segments.indexOf(segment), 1);
	}

	tryAddSegment(segment){
		if(!this.containsSegment(segment) && !segment.p1.equals(segment.p2)){
			this.addSegment(segment);
			return true;
		}
		return false;
	}

	tryAddPoint(point){
		if(!this.containsPoint(point)){
			this.addPoint(point);
			return true
		}
		return false;
	}

	addSegment(segment){
		this.segments.push(segment);
	}

	draw(ctx){
		for(const seg of this.segments){
			seg.draw(ctx);
		}

		for(const point of this.points){
			point.draw(ctx);
		}
	}
}