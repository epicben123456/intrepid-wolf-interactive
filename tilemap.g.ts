// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202020202020202020203090909000000000000000000000009040909090000000000000000000000000408000000000000000000000000000004080000000000000000000000000000040800000000000000000000000000000408000000000000000000000000000004080000000000000000000000000000040800000000000000000000000000000008000000000000000000000000000000080000000000000000000000000000040800000000000000000000000000000408000000000000000000000000000004080000000000000000000000000000040800000000000000000000000000000406070707070707070707070707070705`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.skillmap.islandTile0,sprites.skillmap.islandTile1,sprites.skillmap.islandTile2,sprites.skillmap.islandTile5,sprites.skillmap.islandTile8,sprites.skillmap.islandTile6,sprites.skillmap.islandTile7,sprites.skillmap.islandTile3,sprites.vehicle.roadHorizontal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
