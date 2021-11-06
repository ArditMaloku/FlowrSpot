import FlowerInterface from './FlowerInterface';

export default interface FlowerResponse {
    flowers: Array<FlowerInterface>;
    meta: any;
}
