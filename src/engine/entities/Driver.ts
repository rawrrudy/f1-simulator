export class Driver {
  readonly name: string;

  readonly skill: number;

  readonly consistency: number;

  readonly tyreManagement: number;

  constructor(
    name: string,
    skill: number,
    consistency: number,
    tyreManagement: number
  ) {
    this.name = name;
    this.skill = skill;
    this.consistency = consistency;
    this.tyreManagement = tyreManagement;
  }
}