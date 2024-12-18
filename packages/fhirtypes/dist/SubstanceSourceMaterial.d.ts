/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Resource } from './Resource';

/**
 * Source material shall capture information on the taxonomic and
 * anatomical origins as well as the fraction of a material that can
 * result in or can be modified to form a substance. This set of data
 * elements shall be used to define polymer substances isolated from
 * biological matrices. Taxonomic and anatomical origins shall be
 * described using a controlled vocabulary as required. This information
 * is captured for naturally derived polymers ( . starch) and
 * structurally diverse substances. For Organisms belonging to the
 * Kingdom Plantae the Substance level defines the fresh material of a
 * single species or infraspecies, the Herbal Drug and the Herbal
 * preparation. For Herbal preparations, the fraction information will be
 * captured at the Substance information level and additional information
 * for herbal extracts will be captured at the Specified Substance Group
 * 1 information level. See for further explanation the Substance Class:
 * Structurally Diverse and the herbal annex.
 */
export interface SubstanceSourceMaterial {

  /**
   * This is a SubstanceSourceMaterial resource
   */
  readonly resourceType: 'SubstanceSourceMaterial';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * General high level classification of the source material specific to
   * the origin of the material.
   */
  sourceMaterialClass?: CodeableConcept;

  /**
   * The type of the source material shall be specified based on a
   * controlled vocabulary. For vaccines, this subclause refers to the
   * class of infectious agent.
   */
  sourceMaterialType?: CodeableConcept;

  /**
   * The state of the source material when extracted.
   */
  sourceMaterialState?: CodeableConcept;

  /**
   * The unique identifier associated with the source material parent
   * organism shall be specified.
   */
  organismId?: Identifier;

  /**
   * The organism accepted Scientific name shall be provided based on the
   * organism taxonomy.
   */
  organismName?: string;

  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID
   * of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L.
   * (Whole plant).
   */
  parentSubstanceId?: Identifier[];

  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  parentSubstanceName?: string[];

  /**
   * The country where the plant material is harvested or the countries
   * where the plasma is sourced from as laid down in accordance with the
   * Plasma Master File. For &ldquo;Plasma-derived substances&rdquo; the attribute
   * country of origin provides information about the countries used for
   * the manufacturing of the Cryopoor plama or Crioprecipitate.
   */
  countryOfOrigin?: CodeableConcept[];

  /**
   * The place/region where the plant is harvested or the places/regions
   * where the animal source material has its habitat.
   */
  geographicalLocation?: string[];

  /**
   * Stage of life for animals, plants, insects and microorganisms. This
   * information shall be provided only when the substance is significantly
   * different in these stages (e.g. foetal bovine serum).
   */
  developmentStage?: CodeableConcept;

  /**
   * Many complex materials are fractions of parts of plants, animals, or
   * minerals. Fraction elements are often necessary to define both
   * Substances and Specified Group 1 Substances. For substances derived
   * from Plants, fraction information will be captured at the Substance
   * information level ( . Oils, Juices and Exudates). Additional
   * information for Extracts, such as extraction solvent composition, will
   * be captured at the Specified Substance Group 1 information level. For
   * plasma-derived products fraction information will be captured at the
   * Substance and the Specified Substance Group 1 levels.
   */
  fractionDescription?: SubstanceSourceMaterialFractionDescription[];

  /**
   * This subclause describes the organism which the substance is derived
   * from. For vaccines, the parent organism shall be specified based on
   * these subclause elements. As an example, full taxonomy will be
   * described for the Substance Name: ., Leaf.
   */
  organism?: SubstanceSourceMaterialOrganism;

  /**
   * To do.
   */
  partDescription?: SubstanceSourceMaterialPartDescription[];
}

/**
 * Many complex materials are fractions of parts of plants, animals, or
 * minerals. Fraction elements are often necessary to define both
 * Substances and Specified Group 1 Substances. For substances derived
 * from Plants, fraction information will be captured at the Substance
 * information level ( . Oils, Juices and Exudates). Additional
 * information for Extracts, such as extraction solvent composition, will
 * be captured at the Specified Substance Group 1 information level. For
 * plasma-derived products fraction information will be captured at the
 * Substance and the Specified Substance Group 1 levels.
 */
export interface SubstanceSourceMaterialFractionDescription {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * This element is capturing information about the fraction of a plant
   * part, or human plasma for fractionation.
   */
  fraction?: string;

  /**
   * The specific type of the material constituting the component. For
   * Herbal preparations the particulars of the extracts (liquid/dry) is
   * described in Specified Substance Group 1.
   */
  materialType?: CodeableConcept;
}

/**
 * This subclause describes the organism which the substance is derived
 * from. For vaccines, the parent organism shall be specified based on
 * these subclause elements. As an example, full taxonomy will be
 * described for the Substance Name: ., Leaf.
 */
export interface SubstanceSourceMaterialOrganism {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The family of an organism shall be specified.
   */
  family?: CodeableConcept;

  /**
   * The genus of an organism shall be specified; refers to the Latin
   * epithet of the genus element of the plant/animal scientific name; it
   * is present in names for genera, species and infraspecies.
   */
  genus?: CodeableConcept;

  /**
   * The species of an organism shall be specified; refers to the Latin
   * epithet of the species of the plant/animal; it is present in names for
   * species and infraspecies.
   */
  species?: CodeableConcept;

  /**
   * The Intraspecific type of an organism shall be specified.
   */
  intraspecificType?: CodeableConcept;

  /**
   * The intraspecific description of an organism shall be specified based
   * on a controlled vocabulary. For Influenza Vaccine, the intraspecific
   * description shall contain the syntax of the antigen in line with the
   * WHO convention.
   */
  intraspecificDescription?: string;

  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  author?: SubstanceSourceMaterialOrganismAuthor[];

  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  hybrid?: SubstanceSourceMaterialOrganismHybrid;

  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;
}

/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export interface SubstanceSourceMaterialOrganismAuthor {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The type of author of an organism species shall be specified. The
   * parenthetical author of an organism species refers to the first author
   * who published the plant/animal name (of any rank). The primary author
   * of an organism species refers to the first author(s), who validly
   * published the plant/animal name.
   */
  authorType?: CodeableConcept;

  /**
   * The author of an organism species shall be specified. The author year
   * of an organism shall also be specified when applicable; refers to the
   * year in which the first author(s) published the infraspecific
   * plant/animal name (of any rank).
   */
  authorDescription?: string;
}

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export interface SubstanceSourceMaterialOrganismHybrid {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The identifier of the maternal species constituting the hybrid
   * organism shall be specified based on a controlled vocabulary. For
   * plants, the parents aren&rsquo;t always known, and it is unlikely that it
   * will be known which is maternal and which is paternal.
   */
  maternalOrganismId?: string;

  /**
   * The name of the maternal species constituting the hybrid organism
   * shall be specified. For plants, the parents aren&rsquo;t always known, and
   * it is unlikely that it will be known which is maternal and which is
   * paternal.
   */
  maternalOrganismName?: string;

  /**
   * The identifier of the paternal species constituting the hybrid
   * organism shall be specified based on a controlled vocabulary.
   */
  paternalOrganismId?: string;

  /**
   * The name of the paternal species constituting the hybrid organism
   * shall be specified.
   */
  paternalOrganismName?: string;

  /**
   * The hybrid type of an organism shall be specified.
   */
  hybridType?: CodeableConcept;
}

/**
 * 4.9.13.7.1 Kingdom (Conditional).
 */
export interface SubstanceSourceMaterialOrganismOrganismGeneral {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The kingdom of an organism shall be specified.
   */
  kingdom?: CodeableConcept;

  /**
   * The phylum of an organism shall be specified.
   */
  phylum?: CodeableConcept;

  /**
   * The class of an organism shall be specified.
   */
  class?: CodeableConcept;

  /**
   * The order of an organism shall be specified,.
   */
  order?: CodeableConcept;
}

/**
 * To do.
 */
export interface SubstanceSourceMaterialPartDescription {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Entity of anatomical origin of source material within an organism.
   */
  part?: CodeableConcept;

  /**
   * The detailed anatomic location when the part can be extracted from
   * different anatomical locations of the organism. Multiple alternative
   * locations may apply.
   */
  partLocation?: CodeableConcept;
}
