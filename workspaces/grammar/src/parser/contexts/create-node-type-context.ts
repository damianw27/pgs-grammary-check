import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { PgsParser } from '../pgs-parser';
import { NodeTypeContext } from './node-type-context';
import { PgsListener } from '../types/pgs-listener';
import { PgsVisitor } from '../types/pgs-visitor';

export class CreateNodeTypeContext extends ParserRuleContext {
  public constructor(
    parent: ParserRuleContext | undefined,
    invokingState: number
  ) {
    super(parent, invokingState);
  }

  public CREATE(): TerminalNode {
    return this.getToken(PgsParser.CREATE, 0);
  }

  public SP(): TerminalNode[];
  public SP(i: number): TerminalNode;
  public SP(i?: number): TerminalNode | TerminalNode[] {
    return i === undefined
      ? this.getTokens(PgsParser.SP)
      : this.getToken(PgsParser.SP, i);
  }

  public NODE(): TerminalNode {
    return this.getToken(PgsParser.NODE, 0);
  }

  public TYPE(): TerminalNode {
    return this.getToken(PgsParser.TYPE, 0);
  }

  public nodeType(): NodeTypeContext {
    return this.getRuleContext(0, NodeTypeContext);
  }

  public enterRule(listener: PgsListener): void {
    if (!listener.enterCreateNodeType) {
      return;
    }

    listener.enterCreateNodeType(this);
  }

  public exitRule(listener: PgsListener): void {
    if (!listener.exitCreateNodeType) {
      return;
    }

    listener.exitCreateNodeType(this);
  }

  public accept<Result>(visitor: PgsVisitor<Result>): Result {
    return visitor.visitCreateNodeType
      ? visitor.visitCreateNodeType(this)
      : visitor.visitChildren(this);
  }

  public get ruleIndex(): number {
    return PgsParser.RULE_createNodeType;
  }
}