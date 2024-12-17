/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Resource } from './Resource';
import { UsageContext } from './UsageContext';

/**
 * A TerminologyCapabilities resource documents a set of capabilities
 * (behaviors) of a FHIR Terminology Server that may be used as a
 * statement of actual server functionality or a statement of required or
 * desired server implementation.
 */
export interface TerminologyCapabilities {

  /**
   * This is a TerminologyCapabilities resource
   */
  readonly resourceType: 'TerminologyCapabilities';

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
   * An absolute URI that is used to identify this terminology capabilities
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this terminology capabilities is (or will
   * be) published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the terminology capabilities is stored on
   * different servers.
   */
  url?: string;

  /**
   * The identifier that is used to identify this version of the
   * terminology capabilities when it is referenced in a specification,
   * model, design or instance. This is an arbitrary value managed by the
   * terminology capabilities author and is not expected to be globally
   * unique. For example, it might be a timestamp (e.g. yyyymmdd) if a
   * managed version is not available. There is also no expectation that
   * versions can be placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * A natural language name identifying the terminology capabilities. This
   * name should be usable as an identifier for the module by machine
   * processing applications such as code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for the terminology
   * capabilities.
   */
  title?: string;

  /**
   * The status of this terminology capabilities. Enables tracking the
   * life-cycle of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this terminology capabilities is
   * authored for testing purposes (or education/evaluation/marketing) and
   * is not intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * The date  (and optionally time) when the terminology capabilities was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the terminology capabilities
   * changes.
   */
  date: string;

  /**
   * The name of the organization or individual that published the
   * terminology capabilities.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the terminology
   * capabilities from a consumer's perspective. Typically, this is used
   * when the capability statement describes a desired rather than an
   * actual solution, for example as a formal expression of requirements as
   * part of an RFP.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate terminology capabilities
   * instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the terminology capabilities is
   * intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this terminology capabilities is needed and why it
   * has been designed as it has.
   */
  purpose?: string;

  /**
   * A copyright statement relating to the terminology capabilities and/or
   * its contents. Copyright statements are generally legal restrictions on
   * the use and publishing of the terminology capabilities.
   */
  copyright?: string;

  /**
   * The way that this statement is intended to be used, to describe an
   * actual running instance of software, a particular product (kind, not
   * instance of software) or a class of implementation (e.g. a desired
   * purchase).
   */
  kind: 'instance' | 'capability' | 'requirements';

  /**
   * Software that is covered by this terminology capability statement.  It
   * is used when the statement describes the capabilities of a particular
   * software version, independent of an installation.
   */
  software?: TerminologyCapabilitiesSoftware;

  /**
   * Identifies a specific implementation instance that is described by the
   * terminology capability statement - i.e. a particular installation,
   * rather than the capabilities of a software program.
   */
  implementation?: TerminologyCapabilitiesImplementation;

  /**
   * Whether the server supports lockedDate.
   */
  lockedDate?: boolean;

  /**
   * Identifies a code system that is supported by the server. If there is
   * a no code system URL, then this declares the general assumptions a
   * client can make about support for any CodeSystem resource.
   */
  codeSystem?: TerminologyCapabilitiesCodeSystem[];

  /**
   * Information about the
   * [ValueSet/$expand](valueset-operation-expand.html) operation.
   */
  expansion?: TerminologyCapabilitiesExpansion;

  /**
   * The degree to which the server supports the code search parameter on
   * ValueSet, if it is supported.
   */
  codeSearch?: 'explicit' | 'all';

  /**
   * Information about the
   * [ValueSet/$validate-code](valueset-operation-validate-code.html)
   * operation.
   */
  validateCode?: TerminologyCapabilitiesValidateCode;

  /**
   * Information about the
   * [ConceptMap/$translate](conceptmap-operation-translate.html)
   * operation.
   */
  translation?: TerminologyCapabilitiesTranslation;

  /**
   * Whether the $closure operation is supported.
   */
  closure?: TerminologyCapabilitiesClosure;
}

/**
 * Whether the $closure operation is supported.
 */
export interface TerminologyCapabilitiesClosure {

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
   * If cross-system closure is supported.
   */
  translation?: boolean;
}

/**
 * Identifies a code system that is supported by the server. If there is
 * a no code system URL, then this declares the general assumptions a
 * client can make about support for any CodeSystem resource.
 */
export interface TerminologyCapabilitiesCodeSystem {

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
   * URI for the Code System.
   */
  uri?: string;

  /**
   * For the code system, a list of versions that are supported by the
   * server.
   */
  version?: TerminologyCapabilitiesCodeSystemVersion[];

  /**
   * True if subsumption is supported for this version of the code system.
   */
  subsumption?: boolean;
}

/**
 * For the code system, a list of versions that are supported by the
 * server.
 */
export interface TerminologyCapabilitiesCodeSystemVersion {

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
   * For version-less code systems, there should be a single version with
   * no identifier.
   */
  code?: string;

  /**
   * If this is the default version for this code system.
   */
  isDefault?: boolean;

  /**
   * If the compositional grammar defined by the code system is supported.
   */
  compositional?: boolean;

  /**
   * Language Displays supported.
   */
  language?: string[];

  /**
   * Filter Properties supported.
   */
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];

  /**
   * Properties supported for $lookup.
   */
  property?: string[];
}

/**
 * Filter Properties supported.
 */
export interface TerminologyCapabilitiesCodeSystemVersionFilter {

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
   * Code of the property supported.
   */
  code: string;

  /**
   * Operations supported for the property.
   */
  op: string[];
}

/**
 * Information about the
 * [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
export interface TerminologyCapabilitiesExpansion {

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
   * Whether the server can return nested value sets.
   */
  hierarchical?: boolean;

  /**
   * Whether the server supports paging on expansion.
   */
  paging?: boolean;

  /**
   * Allow request for incomplete expansions?
   */
  incomplete?: boolean;

  /**
   * Supported expansion parameter.
   */
  parameter?: TerminologyCapabilitiesExpansionParameter[];

  /**
   * Documentation about text searching works.
   */
  textFilter?: string;
}

/**
 * Supported expansion parameter.
 */
export interface TerminologyCapabilitiesExpansionParameter {

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
   * Expansion Parameter name.
   */
  name: string;

  /**
   * Description of support for parameter.
   */
  documentation?: string;
}

/**
 * Identifies a specific implementation instance that is described by the
 * terminology capability statement - i.e. a particular installation,
 * rather than the capabilities of a software program.
 */
export interface TerminologyCapabilitiesImplementation {

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
   * Information about the specific installation that this terminology
   * capability statement relates to.
   */
  description: string;

  /**
   * An absolute base URL for the implementation.
   */
  url?: string;
}

/**
 * Software that is covered by this terminology capability statement.  It
 * is used when the statement describes the capabilities of a particular
 * software version, independent of an installation.
 */
export interface TerminologyCapabilitiesSoftware {

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
   * Name the software is known by.
   */
  name: string;

  /**
   * The version identifier for the software covered by this statement.
   */
  version?: string;
}

/**
 * Information about the
 * [ConceptMap/$translate](conceptmap-operation-translate.html)
 * operation.
 */
export interface TerminologyCapabilitiesTranslation {

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
   * Whether the client must identify the map.
   */
  needsMap: boolean;
}

/**
 * Information about the
 * [ValueSet/$validate-code](valueset-operation-validate-code.html)
 * operation.
 */
export interface TerminologyCapabilitiesValidateCode {

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
   * Whether translations are validated.
   */
  translations: boolean;
}
