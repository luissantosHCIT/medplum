/*
 * This is a generated file
 * Do not edit manually.
 */

import { Account } from './Account';
import { Appointment } from './Appointment';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Condition } from './Condition';
import { Duration } from './Duration';
import { EpisodeOfCare } from './EpisodeOfCare';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { ImmunizationRecommendation } from './ImmunizationRecommendation';
import { Location } from './Location';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Procedure } from './Procedure';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { ServiceRequest } from './ServiceRequest';

/**
 * An interaction between a patient and healthcare provider(s) for the
 * purpose of providing healthcare service(s) or assessing the health
 * status of a patient.
 */
export interface Encounter {

  /**
   * This is a Encounter resource
   */
  readonly resourceType: 'Encounter';

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
   * Identifier(s) by which this encounter is known.
   */
  identifier?: Identifier[];

  /**
   * planned | arrived | triaged | in-progress | onleave | finished |
   * cancelled +.
   */
  status: 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled' | 'entered-in-error' | 'unknown';

  /**
   * The status history permits the encounter resource to contain the
   * status history without needing to read through the historical versions
   * of the resource, or even have the server store them.
   */
  statusHistory?: EncounterStatusHistory[];

  /**
   * Concepts representing classification of patient encounter such as
   * ambulatory (outpatient), inpatient, emergency, home health or others
   * due to local variations.
   */
  class: Coding;

  /**
   * The class history permits the tracking of the encounters transitions
   * without needing to go  through the resource history.  This would be
   * used for a case where an admission starts of as an emergency
   * encounter, then transitions into an inpatient scenario. Doing this and
   * not restarting a new encounter ensures that any lab/diagnostic results
   * can more easily follow the patient and not require re-processing and
   * not get lost or cancelled during a kind of discharge from emergency to
   * inpatient.
   */
  classHistory?: EncounterClassHistory[];

  /**
   * Specific type of encounter (e.g. e-mail consultation, surgical
   * day-care, skilled nursing, rehabilitation).
   */
  type?: CodeableConcept[];

  /**
   * Broad categorization of the service that is to be provided (e.g.
   * cardiology).
   */
  serviceType?: CodeableConcept;

  /**
   * Indicates the urgency of the encounter.
   */
  priority?: CodeableConcept;

  /**
   * The patient or group present at the encounter.
   */
  subject?: Reference<Patient | Group>;

  /**
   * Where a specific encounter should be classified as a part of a
   * specific episode(s) of care this field should be used. This
   * association can facilitate grouping of related encounters together for
   * a specific purpose, such as government reporting, issue tracking,
   * association via a common problem.  The association is recorded on the
   * encounter as these are typically created after the episode of care and
   * grouped on entry rather than editing the episode of care to append
   * another encounter to it (the episode of care could span years).
   */
  episodeOfCare?: Reference<EpisodeOfCare>[];

  /**
   * The request this encounter satisfies (e.g. incoming referral or
   * procedure request).
   */
  basedOn?: Reference<ServiceRequest>[];

  /**
   * The list of people responsible for providing the service.
   */
  participant?: EncounterParticipant[];

  /**
   * The appointment that scheduled this encounter.
   */
  appointment?: Reference<Appointment>[];

  /**
   * The start and end time of the encounter.
   */
  period?: Period;

  /**
   * Quantity of time the encounter lasted. This excludes the time during
   * leaves of absence.
   */
  length?: Duration;

  /**
   * Reason the encounter takes place, expressed as a code. For admissions,
   * this can be used for a coded admission diagnosis.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Reason the encounter takes place, expressed as a code. For admissions,
   * this can be used for a coded admission diagnosis.
   */
  reasonReference?: Reference<Condition | Procedure | Observation | ImmunizationRecommendation>[];

  /**
   * The list of diagnosis relevant to this encounter.
   */
  diagnosis?: EncounterDiagnosis[];

  /**
   * The set of accounts that may be used for billing for this Encounter.
   */
  account?: Reference<Account>[];

  /**
   * Details about the admission to a healthcare service.
   */
  hospitalization?: EncounterHospitalization;

  /**
   * List of locations where  the patient has been during this encounter.
   */
  location?: EncounterLocation[];

  /**
   * The organization that is primarily responsible for this Encounter's
   * services. This MAY be the same as the organization on the Patient
   * record, however it could be different, such as if the actor performing
   * the services was from an external organization (which may be billed
   * seperately) for an external consultation.  Refer to the example bundle
   * showing an abbreviated set of Encounters for a colonoscopy.
   */
  serviceProvider?: Reference<Organization>;

  /**
   * Another Encounter of which this encounter is a part of
   * (administratively or in time).
   */
  partOf?: Reference<Encounter>;
}

/**
 * The class history permits the tracking of the encounters transitions
 * without needing to go  through the resource history.  This would be
 * used for a case where an admission starts of as an emergency
 * encounter, then transitions into an inpatient scenario. Doing this and
 * not restarting a new encounter ensures that any lab/diagnostic results
 * can more easily follow the patient and not require re-processing and
 * not get lost or cancelled during a kind of discharge from emergency to
 * inpatient.
 */
export interface EncounterClassHistory {

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
   * inpatient | outpatient | ambulatory | emergency +.
   */
  class: Coding;

  /**
   * The time that the episode was in the specified class.
   */
  period: Period;
}

/**
 * The list of diagnosis relevant to this encounter.
 */
export interface EncounterDiagnosis {

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
   * Reason the encounter takes place, as specified using information from
   * another resource. For admissions, this is the admission diagnosis. The
   * indication will typically be a Condition (with other resources
   * referenced in the evidence.detail), or a Procedure.
   */
  condition: Reference<Condition | Procedure>;

  /**
   * Role that this diagnosis has within the encounter (e.g. admission,
   * billing, discharge &hellip;).
   */
  use?: CodeableConcept;

  /**
   * Ranking of the diagnosis (for each role type).
   */
  rank?: number;
}

/**
 * Details about the admission to a healthcare service.
 */
export interface EncounterHospitalization {

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
   * Pre-admission identifier.
   */
  preAdmissionIdentifier?: Identifier;

  /**
   * The location/organization from which the patient came before
   * admission.
   */
  origin?: Reference<Location | Organization>;

  /**
   * From where patient was admitted (physician referral, transfer).
   */
  admitSource?: CodeableConcept;

  /**
   * Whether this hospitalization is a readmission and why if known.
   */
  reAdmission?: CodeableConcept;

  /**
   * Diet preferences reported by the patient.
   */
  dietPreference?: CodeableConcept[];

  /**
   * Special courtesies (VIP, board member).
   */
  specialCourtesy?: CodeableConcept[];

  /**
   * Any special requests that have been made for this hospitalization
   * encounter, such as the provision of specific equipment or other
   * things.
   */
  specialArrangement?: CodeableConcept[];

  /**
   * Location/organization to which the patient is discharged.
   */
  destination?: Reference<Location | Organization>;

  /**
   * Category or kind of location after discharge.
   */
  dischargeDisposition?: CodeableConcept;
}

/**
 * List of locations where  the patient has been during this encounter.
 */
export interface EncounterLocation {

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
   * The location where the encounter takes place.
   */
  location: Reference<Location>;

  /**
   * The status of the participants' presence at the specified location
   * during the period specified. If the participant is no longer at the
   * location, then the period will have an end date/time.
   */
  status?: 'planned' | 'active' | 'reserved' | 'completed';

  /**
   * This will be used to specify the required levels (bed/ward/room/etc.)
   * desired to be recorded to simplify either messaging or query.
   */
  physicalType?: CodeableConcept;

  /**
   * Time period during which the patient was present at the location.
   */
  period?: Period;
}

/**
 * The list of people responsible for providing the service.
 */
export interface EncounterParticipant {

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
   * Role of participant in encounter.
   */
  type?: CodeableConcept[];

  /**
   * The period of time that the specified participant participated in the
   * encounter. These can overlap or be sub-sets of the overall encounter's
   * period.
   */
  period?: Period;

  /**
   * Persons involved in the encounter other than the patient.
   */
  individual?: Reference<Practitioner | PractitionerRole | RelatedPerson>;
}

/**
 * The status history permits the encounter resource to contain the
 * status history without needing to read through the historical versions
 * of the resource, or even have the server store them.
 */
export interface EncounterStatusHistory {

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
   * planned | arrived | triaged | in-progress | onleave | finished |
   * cancelled +.
   */
  status: 'planned' | 'arrived' | 'triaged' | 'in-progress' | 'onleave' | 'finished' | 'cancelled' | 'entered-in-error' | 'unknown';

  /**
   * The time that the episode was in the specified status.
   */
  period: Period;
}
