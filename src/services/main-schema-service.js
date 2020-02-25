export default class MainSchemaService {
  apiURL =
    'https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/0907091de6fedf6153cdb718f32a4215dc2c53cf/page.json';

  getSchema = async () => {
    const res = await fetch(this.apiURL);
    if (!res.ok) {
      throw new Error(`Could not fetch schema, received ${res.status}`);
    }
    return await res.json();
  };
}
