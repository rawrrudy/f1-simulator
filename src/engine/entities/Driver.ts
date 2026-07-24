export class Driver {
  readonly name: string;

  readonly shortName: string;

  readonly skill: number;

  readonly consistency: number;

  readonly tyreManagement: number;

  constructor(
    name: string,
    shortName: string,
    skill: number,
    consistency: number,
    tyreManagement: number
  ) {
    this.name = name;
    this.shortName = shortName;
    this.skill = skill;
    this.consistency = consistency;
    this.tyreManagement = tyreManagement;
  }
}