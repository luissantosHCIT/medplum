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
import { ResourceType } from './ResourceType';
import { UsageContext } from './UsageContext';

/**
 * A formal computable definition of an operation (on the RESTful
 * interface) or a named query (using the search interaction).
 */
export interface OperationDefinition {

  /**
   * This is a OperationDefinition resource
   */
  readonly resourceType: 'OperationDefinition';

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
   * An absolute URI that is used to identify this operation definition
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this operation definition is (or will be)
   * published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the operation definition is stored on
   * different servers.
   */
  url?: string;

  /**
   * The identifier that is used to identify this version of the operation
   * definition when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the operation
   * definition author and is not expected to be globally unique. For
   * example, it might be a timestamp (e.g. yyyymmdd) if a managed version
   * is not available. There is also no expectation that versions can be
   * placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * A natural language name identifying the operation definition. This
   * name should be usable as an identifier for the module by machine
   * processing applications such as code generation.
   */
  name: string;

  /**
   * A short, descriptive, user-friendly title for the operation
   * definition.
   */
  title?: string;

  /**
   * The status of this operation definition. Enables tracking the
   * life-cycle of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * Whether this is an operation or a named query.
   */
  kind: 'operation' | 'query';

  /**
   * A Boolean value to indicate that this operation definition is authored
   * for testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * The date  (and optionally time) when the operation definition was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the operation definition
   * changes.
   */
  date?: string;

  /**
   * The name of the organization or individual that published the
   * operation definition.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the operation definition
   * from a consumer's perspective.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate operation definition instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the operation definition is
   * intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this operation definition is needed and why it has
   * been designed as it has.
   */
  purpose?: string;

  /**
   * Whether the operation affects state. Side effects such as producing
   * audit trail entries do not count as 'affecting  state'.
   */
  affectsState?: boolean;

  /**
   * The name used to invoke the operation.
   */
  code: string;

  /**
   * Additional information about how to use this operation or named query.
   */
  comment?: string;

  /**
   * Indicates that this operation definition is a constraining profile on
   * the base.
   */
  base?: string;

  /**
   * The types on which this operation can be executed.
   */
  resource?: ResourceType[];

  /**
   * Indicates whether this operation or named query can be invoked at the
   * system level (e.g. without needing to choose a resource type for the
   * context).
   */
  system: boolean;

  /**
   * Indicates whether this operation or named query can be invoked at the
   * resource type level for any given resource type level (e.g. without
   * needing to choose a specific resource id for the context).
   */
  type: boolean;

  /**
   * Indicates whether this operation can be invoked on a particular
   * instance of one of the given types.
   */
  instance: boolean;

  /**
   * Additional validation information for the in parameters - a single
   * profile that covers all the parameters. The profile is a constraint on
   * the parameters resource as a whole.
   */
  inputProfile?: string;

  /**
   * Additional validation information for the out parameters - a single
   * profile that covers all the parameters. The profile is a constraint on
   * the parameters resource.
   */
  outputProfile?: string;

  /**
   * The parameters for the operation/query.
   */
  parameter?: OperationDefinitionParameter[];

  /**
   * Defines an appropriate combination of parameters to use when invoking
   * this operation, to help code generators when generating overloaded
   * parameter sets for this operation.
   */
  overload?: OperationDefinitionOverload[];
}

/**
 * Defines an appropriate combination of parameters to use when invoking
 * this operation, to help code generators when generating overloaded
 * parameter sets for this operation.
 */
export interface OperationDefinitionOverload {

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
   * Name of parameter to include in overload.
   */
  parameterName?: string[];

  /**
   * Comments to go on overload.
   */
  comment?: string;
}

/**
 * The parameters for the operation/query.
 */
export interface OperationDefinitionParameter {

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
   * The name of used to identify the parameter.
   */
  name: string;

  /**
   * Whether this is an input or an output parameter.
   */
  use: 'in' | 'out';

  /**
   * The minimum number of times this parameter SHALL appear in the request
   * or response.
   */
  min: number;

  /**
   * The maximum number of times this element is permitted to appear in the
   * request or response.
   */
  max: string;

  /**
   * Describes the meaning or use of this parameter.
   */
  documentation?: string;

  /**
   * The type for this parameter.
   */
  type?: string;

  /**
   * Used when the type is &quot;Reference&quot; or &quot;canonical&quot;, and identifies a
   * profile structure or implementation Guide that applies to the target
   * of the reference this parameter refers to. If any profiles are
   * specified, then the content must conform to at least one of them. The
   * URL can be a local reference - to a contained StructureDefinition, or
   * a reference to another StructureDefinition or Implementation Guide by
   * a canonical URL. When an implementation guide is specified, the target
   * resource SHALL conform to at least one profile defined in the
   * implementation guide.
   */
  targetProfile?: string[];

  /**
   * How the parameter is understood as a search parameter. This is only
   * used if the parameter type is 'string'.
   */
  searchType?: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';

  /**
   * Binds to a value set if this parameter is coded (code, Coding,
   * CodeableConcept).
   */
  binding?: OperationDefinitionParameterBinding;

  /**
   * Identifies other resource parameters within the operation invocation
   * that are expected to resolve to this resource.
   */
  referencedFrom?: OperationDefinitionParameterReferencedFrom[];

  /**
   * The parts of a nested Parameter.
   */
  part?: OperationDefinitionParameter[];
}

/**
 * Binds to a value set if this parameter is coded (code, Coding,
 * CodeableConcept).
 */
export interface OperationDefinitionParameterBinding {

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
   * Indicates the degree of conformance expectations associated with this
   * binding - that is, the degree to which the provided value set must be
   * adhered to in the instances.
   */
  strength: 'required' | 'extensible' | 'preferred' | 'example';

  /**
   * Points to the value set or external definition (e.g. implicit value
   * set) that identifies the set of codes to be used.
   */
  valueSet: string;
}

/**
 * Identifies other resource parameters within the operation invocation
 * that are expected to resolve to this resource.
 */
export interface OperationDefinitionParameterReferencedFrom {

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
   * The name of the parameter or dot-separated path of parameter names
   * pointing to the resource parameter that is expected to contain a
   * reference to this resource.
   */
  source: string;

  /**
   * The id of the element in the referencing resource that is expected to
   * resolve to this resource.
   */
  sourceId?: string;
}
