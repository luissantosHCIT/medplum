/*
 * This is a generated file
 * Do not edit manually.
 */

import { AllergyIntolerance } from './AllergyIntolerance';
import { CodeableConcept } from './CodeableConcept';
import { Condition } from './Condition';
import { Device } from './Device';
import { DocumentReference } from './DocumentReference';
import { Encounter } from './Encounter';
import { Extension } from './Extension';
import { FamilyMemberHistory } from './FamilyMemberHistory';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Immunization } from './Immunization';
import { Location } from './Location';
import { Media } from './Media';
import { Medication } from './Medication';
import { MedicationAdministration } from './MedicationAdministration';
import { MedicationStatement } from './MedicationStatement';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Procedure } from './Procedure';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { ResearchStudy } from './ResearchStudy';
import { Resource } from './Resource';
import { Substance } from './Substance';

/**
 * Actual or  potential/avoided event causing unintended physical injury
 * resulting from or contributed to by medical care, a research study or
 * other healthcare setting factors that requires additional monitoring,
 * treatment, or hospitalization, or that results in death.
 */
export interface AdverseEvent {

  /**
   * This is a AdverseEvent resource
   */
  readonly resourceType: 'AdverseEvent';

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
   * Business identifiers assigned to this adverse event by the performer
   * or other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier;

  /**
   * Whether the event actually happened, or just had the potential to.
   * Note that this is independent of whether anyone was affected or harmed
   * or how severely.
   */
  actuality: 'actual' | 'potential';

  /**
   * The overall type of event, intended for search and filtering purposes.
   */
  category?: CodeableConcept[];

  /**
   * This element defines the specific type of event that occurred or that
   * was prevented from occurring.
   */
  event?: CodeableConcept;

  /**
   * This subject or group impacted by the event.
   */
  subject: Reference<Patient | Group | Practitioner | RelatedPerson>;

  /**
   * The Encounter during which AdverseEvent was created or to which the
   * creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * The date (and perhaps time) when the adverse event occurred.
   */
  date?: string;

  /**
   * Estimated or actual date the AdverseEvent began, in the opinion of the
   * reporter.
   */
  detected?: string;

  /**
   * The date on which the existence of the AdverseEvent was first
   * recorded.
   */
  recordedDate?: string;

  /**
   * Includes information about the reaction that occurred as a result of
   * exposure to a substance (for example, a drug or a chemical).
   */
  resultingCondition?: Reference<Condition>[];

  /**
   * The information about where the adverse event occurred.
   */
  location?: Reference<Location>;

  /**
   * Assessment whether this event was of real importance.
   */
  seriousness?: CodeableConcept;

  /**
   * Describes the severity of the adverse event, in relation to the
   * subject. Contrast to AdverseEvent.seriousness - a severe rash might
   * not be serious, but a mild heart problem is.
   */
  severity?: CodeableConcept;

  /**
   * Describes the type of outcome from the adverse event.
   */
  outcome?: CodeableConcept;

  /**
   * Information on who recorded the adverse event.  May be the patient or
   * a practitioner.
   */
  recorder?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>;

  /**
   * Parties that may or should contribute or have contributed information
   * to the adverse event, which can consist of one or more activities.
   * Such information includes information leading to the decision to
   * perform the activity and how to perform the activity (e.g.
   * consultant), information that the activity itself seeks to reveal
   * (e.g. informant of clinical history), or information about what
   * activity was performed (e.g. informant witness).
   */
  contributor?: Reference<Practitioner | PractitionerRole | Device>[];

  /**
   * Describes the entity that is suspected to have caused the adverse
   * event.
   */
  suspectEntity?: AdverseEventSuspectEntity[];

  /**
   * AdverseEvent.subjectMedicalHistory.
   */
  subjectMedicalHistory?: Reference<Condition | Observation | AllergyIntolerance | FamilyMemberHistory | Immunization
      | Procedure | Media | DocumentReference>[];

  /**
   * AdverseEvent.referenceDocument.
   */
  referenceDocument?: Reference<DocumentReference>[];

  /**
   * AdverseEvent.study.
   */
  study?: Reference<ResearchStudy>[];
}

/**
 * Describes the entity that is suspected to have caused the adverse
 * event.
 */
export interface AdverseEventSuspectEntity {

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
   * Identifies the actual instance of what caused the adverse event.  May
   * be a substance, medication, medication administration, medication
   * statement or a device.
   */
  instance: Reference<Immunization | Procedure | Substance | Medication | MedicationAdministration | MedicationStatement | Device>;

  /**
   * Information on the possible cause of the event.
   */
  causality?: AdverseEventSuspectEntityCausality[];
}

/**
 * Information on the possible cause of the event.
 */
export interface AdverseEventSuspectEntityCausality {

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
   * Assessment of if the entity caused the event.
   */
  assessment?: CodeableConcept;

  /**
   * AdverseEvent.suspectEntity.causalityProductRelatedness.
   */
  productRelatedness?: string;

  /**
   * AdverseEvent.suspectEntity.causalityAuthor.
   */
  author?: Reference<Practitioner | PractitionerRole>;

  /**
   * ProbabilityScale | Bayesian | Checklist.
   */
  method?: CodeableConcept;
}
