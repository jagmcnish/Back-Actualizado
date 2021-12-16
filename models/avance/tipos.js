import { gql } from "apollo-server-express";

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fechaAvance: Date!
    descripcion: String!
    observaciones: String
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    Avance(_id: String!): Avance
    AvancesPorLider: [Avance]
    AvancesPorUsuario(_id: String!): [Avance]
    AvancesPorProyecto: [Avance]
    ProyectosRegistrar: [Proyecto]
  }
  type Mutation {
    crearAvance(
      fechaAvance: Date
      descripcion: String!
      proyecto: String!
      creadoPor: String
      observaciones: String
    ): Avance
    editarAvance(
      _id: String!
      proyecto: String
      descripcion: String!
      observaciones: String
    ): Avance
    crearAvanceGenerico(
      idEstudiante: String!
      fechaAvance: Date
      descripcion: String!
      proyecto: String!
      creadoPor: String
      observaciones: String
    ): Avance
    editarAvanceEstudiante(
      _id: String!
      proyecto: String
      descripcion: String!
      idEstudiante: String!
    ): Avance
    editarAvanceLider(
      _id: String!
      proyecto: String
      observaciones: String!
      idLider: String!
    ): Avance
  }
`;

export { tiposAvance };
