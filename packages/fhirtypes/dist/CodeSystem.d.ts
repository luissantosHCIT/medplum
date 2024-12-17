/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Resource } from './Resource';
import { UsageContext } from './UsageContext';

/**
 * The CodeSystem resource is used to declare the existence of and
 * describe a code system or code system supplement and its key
 * properties, and optionally define a part or all of its content.
 */
export interface CodeSystem {

  /**
   * This is a CodeSystem resource
   */
  readonly resourceType: 'CodeSystem';

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
   * An absolute URI that is used to identify this code system when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this code system is (or will be) published. This URL can
   * be the target of a canonical reference. It SHALL remain the same when
   * the code system is stored on different servers. This is used in
   * [Coding](datatypes.html#Coding).system.
   */
  url?: string;

  /**
   * A formal identifier that is used to identify this code system when it
   * is represented in other formats, or referenced in a specification,
   * model, design or an instance.
   */
  identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the code
   * system when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the code system author
   * and is not expected to be globally unique. For example, it might be a
   * timestamp (e.g. yyyymmdd) if a managed version is not available. There
   * is also no expectation that versions can be placed in a
   * lexicographical sequence. This is used in
   * [Coding](datatypes.html#Coding).version.
   */
  version?: string;

  /**
   * A natural language name identifying the code system. This name should
   * be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for the code system.
   */
  title?: string;

  /**
   * The date (and optionally time) when the code system resource was
   * created or revised.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this code system is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * The date  (and optionally time) when the code system was published.
   * The date must change when the business version changes and it must
   * change if the status code changes. In addition, it should change when
   * the substantive content of the code system changes.
   */
  date?: string;

  /**
   * The name of the organization or individual that published the code
   * system.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the code system from a
   * consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate code system instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the code system is intended to
   * be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this code system is needed and why it has been
   * designed as it has.
   */
  purpose?: string;

  /**
   * A copyright statement relating to the code system and/or its contents.
   * Copyright statements are generally legal restrictions on the use and
   * publishing of the code system.
   */
  copyright?: string;

  /**
   * If code comparison is case sensitive when codes within this system are
   * compared to each other.
   */
  caseSensitive?: boolean;

  /**
   * Canonical reference to the value set that contains the entire code
   * system.
   */
  valueSet?: string;

  /**
   * The meaning of the hierarchy of concepts as represented in this
   * resource.
   */
  hierarchyMeaning?: 'grouped-by' | 'is-a' | 'part-of' | 'classified-with';

  /**
   * The code system defines a compositional (post-coordination) grammar.
   */
  compositional?: boolean;

  /**
   * This flag is used to signify that the code system does not commit to
   * concept permanence across versions. If true, a version must be
   * specified when referencing this code system.
   */
  versionNeeded?: boolean;

  /**
   * The extent of the content of the code system (the concepts and codes
   * it defines) are represented in this resource instance.
   */
  content: 'not-present' | 'example' | 'fragment' | 'complete' | 'supplement';

  /**
   * The canonical URL of the code system that this code system supplement
   * is adding designations and properties to.
   */
  supplements?: string;

  /**
   * The total number of concepts defined by the code system. Where the
   * code system has a compositional grammar, the basis of this count is
   * defined by the system steward.
   */
  count?: number;

  /**
   * A filter that can be used in a value set compose statement when
   * selecting concepts using a filter.
   */
  filter?: CodeSystemFilter[];

  /**
   * A property defines an additional slot through which additional
   * information can be provided about a concept.
   */
  property?: CodeSystemProperty[];

  /**
   * Concepts that are in the code system. The concept definitions are
   * inherently hierarchical, but the definitions must be consulted to
   * determine what the meanings of the hierarchical relationships are.
   */
  concept?: CodeSystemConcept[];
}

/**
 * Concepts that are in the code system. The concept definitions are
 * inherently hierarchical, but the definitions must be consulted to
 * determine what the meanings of the hierarchical relationships are.
 */
export interface CodeSystemConcept {

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
   * A code - a text symbol - that uniquely identifies the concept within
   * the code system.
   */
  code: string;

  /**
   * A human readable string that is the recommended default way to present
   * this concept to a user.
   */
  display?: string;

  /**
   * The formal definition of the concept. The code system resource does
   * not make formal definitions required, because of the prevalence of
   * legacy systems. However, they are highly recommended, as without them
   * there is no formal meaning associated with the concept.
   */
  definition?: string;

  /**
   * Additional representations for the concept - other languages, aliases,
   * specialized purposes, used for particular purposes, etc.
   */
  designation?: CodeSystemConceptDesignation[];

  /**
   * A property value for this concept.
   */
  property?: CodeSystemConceptProperty[];

  /**
   * Defines children of a concept to produce a hierarchy of concepts. The
   * nature of the relationships is variable (is-a/contains/categorizes) -
   * see hierarchyMeaning.
   */
  concept?: CodeSystemConcept[];
}

/**
 * Additional representations for the concept - other languages, aliases,
 * specialized purposes, used for particular purposes, etc.
 */
export interface CodeSystemConceptDesignation {

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
   * The language this designation is defined for.
   */
  language?: string;

  /**
   * A code that details how this designation would be used.
   */
  use?: Coding;

  /**
   * The text value for this designation.
   */
  value: string;
}

/**
 * A property value for this concept.
 */
export interface CodeSystemConceptProperty {

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
   * A code that is a reference to CodeSystem.property.code.
   */
  code: string;

  /**
   * The value of this property.
   */
  valueCode?: string;

  /**
   * The value of this property.
   */
  valueCoding?: Coding;

  /**
   * The value of this property.
   */
  valueString?: string;

  /**
   * The value of this property.
   */
  valueInteger?: number;

  /**
   * The value of this property.
   */
  valueBoolean?: boolean;

  /**
   * The value of this property.
   */
  valueDateTime?: string;

  /**
   * The value of this property.
   */
  valueDecimal?: number;
}

/**
 * The value of this property.
 */
export type CodeSystemConceptPropertyValue = boolean | Coding | number | string;

/**
 * A filter that can be used in a value set compose statement when
 * selecting concepts using a filter.
 */
export interface CodeSystemFilter {

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
   * The code that identifies this filter when it is used as a filter in
   * [ValueSet](valueset.html#).compose.include.filter.
   */
  code: string;

  /**
   * A description of how or why the filter is used.
   */
  description?: string;

  /**
   * A list of operators that can be used with the filter.
   */
  operator: ('=' | 'is-a' | 'descendent-of' | 'is-not-a' | 'regex' | 'in' | 'not-in' | 'generalizes' | 'exists')[];

  /**
   * A description of what the value for the filter should be.
   */
  value: string;
}

/**
 * A property defines an additional slot through which additional
 * information can be provided about a concept.
 */
export interface CodeSystemProperty {

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
   * A code that is used to identify the property. The code is used
   * internally (in CodeSystem.concept.property.code) and also externally,
   * such as in property filters.
   */
  code: string;

  /**
   * Reference to the formal meaning of the property. One possible source
   * of meaning is the [Concept
   * Properties](codesystem-concept-properties.html) code system.
   */
  uri?: string;

  /**
   * A description of the property- why it is defined, and how its value
   * might be used.
   */
  description?: string;

  /**
   * The type of the property value. Properties of type &quot;code&quot; contain a
   * code defined by the code system (e.g. a reference to another defined
   * concept).
   */
  type: 'code' | 'Coding' | 'string' | 'integer' | 'boolean' | 'dateTime' | 'decimal';
}
