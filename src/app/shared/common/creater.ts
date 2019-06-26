import { MyGrid } from '../model/mygrid/my-grid';

export class Creater {
 public shapeType: any;
  constructor() {
    enum ShapeType {
      MyShape = 0,
      random = 1
    }
    this.shapeType = ShapeType;
  }


  public initShapeType(type: any, grid: any): void {
    switch (type) {
      case this.shapeType.MyShape:
        this.setGlinder(grid);
        break;
      case this.shapeType.random:
        this.setRandom(grid);
        break;
        default:
        break;
    }
  }


  private setGlinder(grid: MyGrid): MyGrid {
    grid.myarray[9][44] = 1;
    grid.myarray[10][42] = 1;
    grid.myarray[10][44] = 1;
    grid.myarray[11][32] = 1;
    grid.myarray[11][33] = 1;
    grid.myarray[11][40] = 1;
    grid.myarray[11][41] = 1;
    grid.myarray[11][54] = 1;
    grid.myarray[11][55] = 1;
    grid.myarray[12][31] = 1;
    grid.myarray[12][35] = 1;
    grid.myarray[12][40] = 1;
    grid.myarray[12][41] = 1;
    grid.myarray[12][54] = 1;
    grid.myarray[12][55] = 1;
    grid.myarray[13][20] = 1;
    grid.myarray[13][21] = 1;
    grid.myarray[13][30] = 1;
    grid.myarray[13][36] = 1;
    grid.myarray[13][40] = 1;
    grid.myarray[13][41] = 1;
    grid.myarray[14][20] = 1;
    grid.myarray[14][21] = 1;
    grid.myarray[14][30] = 1;
    grid.myarray[14][34] = 1;
    grid.myarray[14][36] = 1;
    grid.myarray[14][37] = 1;
    grid.myarray[14][42] = 1;
    grid.myarray[14][44] = 1;
    grid.myarray[15][30] = 1;
    grid.myarray[15][36] = 1;
    grid.myarray[15][44] = 1;
    grid.myarray[16][31] = 1;
    grid.myarray[16][35] = 1;
    grid.myarray[17][32] = 1;
    grid.myarray[17][33] = 1;
    return grid;
  }


  private setRandom(grid: MyGrid): MyGrid {
    grid._build();

    for (let row: any = 0; row < grid.getRows().length; row++) {

      for (let column: any = 0; column < grid.getColumn().length; column++) {
        grid.myarray[row][column] = Math.round(Math.random());
      }
    }
    return grid;
  }
}
