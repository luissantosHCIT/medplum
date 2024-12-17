/*
 * This is a generated file
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CareTeam } from './CareTeam';
import { CodeableConcept } from './CodeableConcept';
import { Condition } from './Condition';
import { Device } from './Device';
import { DiagnosticReport } from './DiagnosticReport';
import { DocumentReference } from './DocumentReference';
import { Encounter } from './Encounter';
import { Extension } from './Extension';
import { Group } from './Group';
import { HealthcareService } from './HealthcareService';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';

/**
 * An occurrence of information being transmitted; e.g. an alert that was
 * sent to a responsible provider, a public health agency that was
 * notified about a reportable condition.
 */
export interface Communication {

  /**
   * This is a Communication resource
   */
  readonly resourceType: 'Communication';

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
   * Business identifiers assigned to this communication by the performer
   * or other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or
   * other definition that is adhered to in whole or in part by this
   * Communication.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * orderset or other definition that is adhered to in whole or in part by
   * this Communication.
   */
  instantiatesUri?: string[];

  /**
   * An order, proposal or plan fulfilled in whole or in part by this
   * Communication.
   */
  basedOn?: Reference<Resource>[];

  /**
   * Part of this action.
   */
  partOf?: Reference<Resource>[];

  /**
   * Prior communication that this communication is in response to.
   */
  inResponseTo?: Reference<Communication>[];

  /**
   * The status of the transmission.
   */
  status: 'preparation' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped' | 'completed' | 'entered-in-error' | 'unknown';

  /**
   * Captures the reason for the current state of the Communication.
   */
  statusReason?: CodeableConcept;

  /**
   * The type of message conveyed such as alert, notification, reminder,
   * instruction, etc.
   */
  category?: CodeableConcept[];

  /**
   * Characterizes how quickly the planned or in progress communication
   * must be addressed. Includes concepts such as stat, urgent, routine.
   */
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';

  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: CodeableConcept[];

  /**
   * The patient or group that was the focus of this communication.
   */
  subject?: Reference<Patient | Group>;

  /**
   * Description of the purpose/content, similar to a subject line in an
   * email.
   */
  topic?: CodeableConcept;

  /**
   * Other resources that pertain to this communication and to which this
   * communication should be associated.
   */
  about?: Reference<Resource>[];

  /**
   * The Encounter during which this Communication was created or to which
   * the creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * The time when this communication was sent.
   */
  sent?: string;

  /**
   * The time when this communication arrived at the destination.
   */
  received?: string;

  /**
   * The entity (e.g. person, organization, clinical information system,
   * care team or device) which was the target of the communication. If
   * receipts need to be tracked by an individual, a separate resource
   * instance will need to be created for each recipient.  Multiple
   * recipient communications are intended where either receipts are not
   * tracked (e.g. a mass mail-out) or a receipt is captured in aggregate
   * (all emails confirmed received by a particular time).
   */
  recipient?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson | Group | CareTeam | HealthcareService>[];

  /**
   * The entity (e.g. person, organization, clinical information system, or
   * device) which was the source of the communication.
   */
  sender?: Reference<Device | Organization | Patient | Practitioner | PractitionerRole | RelatedPerson | HealthcareService>;

  /**
   * The reason or justification for the communication.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this
   * communication.
   */
  reasonReference?: Reference<Condition | Observation | DiagnosticReport | DocumentReference>[];

  /**
   * Text, attachment(s), or resource(s) that was communicated to the
   * recipient.
   */
  payload?: CommunicationPayload[];

  /**
   * Additional notes or commentary about the communication by the sender,
   * receiver or other interested parties.
   */
  note?: Annotation[];
}

/**
 * Text, attachment(s), or resource(s) that was communicated to the
 * recipient.
 */
export interface CommunicationPayload {

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
   * A communicated content (or for multi-part communications, one portion
   * of the communication).
   */
  contentString?: string;

  /**
   * A communicated content (or for multi-part communications, one portion
   * of the communication).
   */
  contentAttachment?: Attachment;

  /**
   * A communicated content (or for multi-part communications, one portion
   * of the communication).
   */
  contentReference?: Reference<Resource>;
}

/**
 * A communicated content (or for multi-part communications, one portion
 * of the communication).
 */
export type CommunicationPayloadContent = Attachment | Reference<Resource> | string;
