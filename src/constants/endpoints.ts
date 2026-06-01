const baseEndpointUrl = "http://localhost:3000";

export const countSetsUrl = baseEndpointUrl + "/sets/count";
export const countPartUrl = baseEndpointUrl + "/parts/count";
export const countInventoryUrl = baseEndpointUrl + "/inventories/count";
export const countInventoryPartUrl = baseEndpointUrl + "/inventoryPart/count";
export const countColorUrl = baseEndpointUrl + "/color/count";
export const countThemeUrl = baseEndpointUrl + "/theme/count";

export const getLast8YearSetCountUrl =
  baseEndpointUrl + "/sets/last8_year_count";
export const getPartCatCountUrl = baseEndpointUrl + "/parts/part_cat_count";
export const getInventoryGraphDataUrl =
  baseEndpointUrl + "/inventories/8_inventory_persets";
export const getInventoryAndQuentityDataUrl =
  baseEndpointUrl + "/inventoryPart/inventory_and_quentity";

export const getSetPArtDataUrl = baseEndpointUrl + "/sets/sets_part_analysis";
export const themeBarDataurl = baseEndpointUrl + "/theme/getThemeAnalysisData";

export const getAllColorsUrl = baseEndpointUrl + '/color/getAll'
