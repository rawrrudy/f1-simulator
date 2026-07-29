export class Driver {
  readonly name: string;

  readonly shortName: string;

  readonly team: string;

  readonly skill: number;

  readonly consistency: number;

  readonly tyreManagement: number;

  constructor(
    name: string,
    shortName: string,
    team: string,
    skill: number,
    consistency: number,
    tyreManagement: number
  ) {
    this.name = name;
    this.shortName = shortName;
    this.team = team;
    this.skill = skill;
    this.consistency = consistency;
    this.tyreManagement = tyreManagement;
  }
}